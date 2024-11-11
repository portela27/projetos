import sqlite3

def cria_db(conexao):
    cursor = conexao.cursor()
    cursor.execute(
    """CREATE TABLE IF NOT EXISTS filmes (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        ano INTEGER NOT NULL,
        nota REAL NOT NULL
    );
    """
    )
    conexao.commit()
    cursor.close()

def conecta_db():
    conexao = sqlite3.connect('titulo.db')
    cria_db(conexao)
    return conexao

def insere_dados(nome, ano, nota):
    conexao = conecta_db()
    cursor = conexao.cursor()
    cursor.execute(
        """
        INSERT INTO filmes (nome, ano, nota)
        VALUES (?, ?, ?)
        """,
        (nome, ano, nota)
    )
    conexao.commit()
    cursor.close()
    conexao.close()

def obter_dados():
    conexao = conecta_db()
    cursor = conexao.cursor()
    cursor.execute("SELECT * FROM filmes")
    dados = cursor.fetchall()
    cursor.close()
    conexao.close()
    return dados
 #