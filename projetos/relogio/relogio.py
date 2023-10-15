from tkinter import *
from time import strftime

def atrelogio():
    hora_atual = strftime("%H:%M:%S")
    rotulo_relogio.config(text=hora_atual)
    rotulo_relogio.after(1000,atrelogio)

relogio= Tk()
relogio.title("primeiro relogio ")

rotulo_relogio = Label(
    relogio,
    font=("Arial",40,"bold"),
    background="pink",
    foreground="blue"
)
rotulo_relogio.pack(anchor="center")

atrelogio()
relogio.mainloop()
