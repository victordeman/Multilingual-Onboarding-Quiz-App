import streamlit as st
import requests

st.title("Multilingual Onboarding Quiz Dashboard")

# Language selector
lang = st.selectbox("Select Language", ["English", "German"])
lang_code = "en" if lang == "English" else "de"

# Fetch quizzes
response = requests.get(f"http://localhost:5000/api/quizzes/{lang_code}")
quizzes = response.json()

# Display quizzes
for quiz in quizzes:
    st.write(f"**Question:** {quiz['question']}")
    option = st.radio("Choose an option", quiz['options'], key=quiz['id'])
    if st.button("Submit", key=f"submit_{quiz['id']}"):
        response = requests.post("http://localhost:5000/api/responses", json={
            "userId": "user123",
            "quizId": quiz['id'],
            "answer": option
        })
        st.write(response.json()['certificate'])
