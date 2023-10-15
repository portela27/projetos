from random import choice
from time import sleep
from interface import cabeçalho
senha = []

def tamanho ():
    tam= int(input('tamanho: '))
    return tam


def gerador  (tam):
    cabeçalho()
    sleep(0.8)

    strings = ("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","&","*")

    
    for string in range(0,int(tam)):
        senha.append(choice(strings))

    for caractere in senha:
        print(caractere,end="")

    with open ('senhas.txt','w') as arquivo:
        arquivo.write(str(senha))

print("")
senha.clear
sleep(0.8)

