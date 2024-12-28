from PIL import Image, ImageDraw, ImageTk
import tkinter as tk
from tkinter import filedialog, messagebox
from tkinter import ttk
import os

class ImageProcessorGUI:
    def __init__(self, root):
        self.root = root
        self.root.title("紅色線條提取器")
        self.root.geometry("500x300")
        
        self.input_path = tk.StringVar()
        self.output_path = tk.StringVar()
        self.create_widgets()
        
    def create_widgets(self):
        # 選擇文件區域
        self.select_frame = ttk.LabelFrame(self.root, text="選擇圖片")
        self.select_frame.pack(pady=10, padx=10, fill='both', expand=True)
        
        self.file_label = ttk.Label(self.select_frame, text="點擊選擇文件")
        self.file_label.pack(pady=40)
        self.file_label.bind('<Button-1>', lambda e: self.select_input())
        
        # 輸出文件選擇
        output_frame = ttk.Frame(self.root)
        output_frame.pack(pady=10, padx=10, fill='x')
        
        ttk.Label(output_frame, text="輸出位置:").pack(side='left')
        ttk.Entry(output_frame, textvariable=self.output_path).pack(side='left', fill='x', expand=True, padx=5)
        ttk.Button(output_frame, text="瀏覽", command=self.select_output).pack(side='right')
        
        # 處理按鈕
        self.process_btn = ttk.Button(self.root, text="開始處理", command=self.process_image, state='disabled')
        self.process_btn.pack(pady=20)
        
        # 狀態標籤
        self.status_label = ttk.Label(self.root, text="")
        self.status_label.pack(pady=5)
        
    def select_input(self):
        filename = filedialog.askopenfilename(
            title="選擇輸入圖片",
            filetypes=[("圖片文件", "*.png *.jpg *.jpeg *.bmp *.gif")]
        )
        if filename and self.validate_image_file(filename):
            self.input_path.set(filename)
            self.file_label.configure(text=f"已選擇: {os.path.basename(filename)}")
            self.process_btn.configure(state='normal')
            self.status_label.configure(text="圖片已準備就緒")
            
    def select_output(self):
        filename = filedialog.asksaveasfilename(
            title="選擇保存位置",
            defaultextension=".png",
            filetypes=[("PNG 文件", "*.png")]
        )
        if filename:
            self.output_path.set(filename)
            
    def process_image(self):
        if not self.input_path.get():
            messagebox.showerror("錯誤", "請先選擇輸入圖片")
            return
            
        if not self.output_path.get():
            # 自動生成輸出路徑
            input_path = self.input_path.get()
            output_path = input_path.rsplit('.', 1)[0] + '_processed.png'
            self.output_path.set(output_path)
            
        try:
            self.status_label.configure(text="處理中...")
            self.root.update()
            
            # 打開圖片
            image = Image.open(self.input_path.get()).convert("RGBA")
            
            # 提取紅色線條
            extracted = Image.new("RGBA", image.size, (255, 255, 255, 255))
            pixels = image.load()
            new_pixels = extracted.load()
            
            for y in range(image.height):
                for x in range(image.width):
                    r, g, b, a = pixels[x, y]
                    if r > 200 and g < 100 and b < 100:  # 檢測紅色
                        new_pixels[x, y] = (r, g, b, a)
                    else:
                        new_pixels[x, y] = (255, 255, 255, 255)
            
            # 保存結果
            extracted.save(self.output_path.get())
            self.status_label.configure(text="處理完成！")
            messagebox.showinfo("成功", "圖片處理完成！")
            
        except Exception as e:
            self.status_label.configure(text="處理失敗")
            messagebox.showerror("錯誤", f"處理過程中出現錯誤：{str(e)}")

    def validate_image_file(self, file_path):
        valid_extensions = ('.png', '.jpg', '.jpeg', '.bmp', '.gif')
        if file_path and file_path.lower().endswith(valid_extensions):
            return True
        messagebox.showerror("錯誤", "請選擇有效的圖片文件")
        return False

if __name__ == "__main__":
    root = tk.Tk()
    app = ImageProcessorGUI(root)
    root.mainloop()
