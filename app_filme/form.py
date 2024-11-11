import streamlit as st
import dados

st.title("filmes")


nome = st.text_input("Nome do filme: ")
ano = st.number_input("Ano do filme: ", min_value=1950 , max_value=2024)
nota = st.slider("Nota do filme:", min_value=0.0 , max_value=10.0)

if st.button("adicionar"):
    dados.insere_dados(nome,ano,nota)
    st.success("filme cadastrado")
    
