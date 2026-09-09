from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


SRC = Path(
    r"C:\Users\xl24j\AppData\Local\Temp\codex-clipboard-683506c5-bab7-4791-a8fc-b8a74be585c9.png"
)
OUT = Path("figure/ai_infinity_stones_models.png")


def load_font(name: str, size: int):
    try:
        return ImageFont.truetype(name, size)
    except OSError:
        return ImageFont.load_default()


img = Image.open(SRC).convert("RGB")

crops = [
    (45, 45, 245, 218),
    (395, 45, 575, 200),
    (710, 45, 900, 215),
    (1030, 42, 1215, 205),
    (55, 405, 255, 565),
    (370, 385, 585, 570),
]
labels = ["ChatGPT/GPT", "Claude", "Gemini", "Copilot", "DeepSeek", "Qwen/Kimi"]

stone_size = 140
cell_w = 185
canvas = Image.new("RGB", (cell_w * len(labels), 220), "white")
draw = ImageDraw.Draw(canvas)

font = load_font("arialbd.ttf", 25)
small_font = load_font("arialbd.ttf", 23)

for i, (box, label) in enumerate(zip(crops, labels)):
    crop = img.crop(box)
    crop.thumbnail((stone_size, stone_size), Image.Resampling.LANCZOS)
    x = i * cell_w + (cell_w - crop.width) // 2
    canvas.paste(crop, (x, 14))

    label_font = small_font if len(label) > 9 else font
    bbox = draw.textbbox((0, 0), label, font=label_font)
    tx = i * cell_w + (cell_w - (bbox[2] - bbox[0])) // 2
    ty = 168
    for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
        draw.text((tx + dx, ty + dy), label, fill="white", font=label_font)
    draw.text((tx, ty), label, fill="black", font=label_font)

OUT.parent.mkdir(parents=True, exist_ok=True)
canvas.save(OUT)
print(OUT)
