import { createReducer } from "@reduxjs/toolkit"
import { userLogin, userLogout, userRegister, userDelete, userEdit, userPersistence } from "../action/userAction"


const inicialStateUser = {
    user: {
        id: 1,
        name: "Fil",
        last_name: "Gonzalez",
        photo: "https://d1zzxdyvtq79bu.cloudfront.net/context/frontend/landing/header_hero_masonry/chef/chef-10.jpg",
        email: "RomanGonzales@hotmail.com",
        phone: "1234567890",
        profession: [
            "Chef",
            "Auxiliar de cocina"
        ],
        experience:
            [
                { "company": "McDonalds", "position": "Auxiliar de cocina", "date": "2019-2020" },
                { "company": "Burger King", "position": "Chef", "date": "2020-2021" }
            ],
        education:
            [
                { "school": "Escuela de cocina", "degree": "Chef", "date": "2018-2019" },
                { "school": "Escuela de cocina", "degree": "Auxiliar de cocina", "date": "2019-2020" }
            ],
        skills: ["Cocina rapida", "Trabajo en equipo", "Aprendizaje rapido"],
        aboutMe: "Soy un chef con 2 años de experiencia en cocina rapida, me gusta trabajar en equipo y aprender cosas nuevas",
        cv: "https://drive.google.com/file/d/",
        rol: "admin"
    },
    token: null
}

const userReducer = createReducer(inicialStateUser, (builder) => builder
    .addCase(userLogin.fulfilled, (state, action) => {
        return {
            ...state,
            user: action.payload.user,
            token: action.payload.token
        }
    })
    .addCase(userLogout.fulfilled, (state, action) => {
        return {
            ...state,
            user: null,
            token: null
        }
    })
    .addCase(userRegister.fulfilled, (state, action) => {
        return {
            ...state,
            user: action.payload.user
        }
    })
    .addCase(userDelete.fulfilled, (state, action) => {
        return {
            ...state,
            user: action.payload.user
        }
    })
    .addCase(userEdit.fulfilled, (state, action) => {
        return {
            ...state,
            user: action.payload.user
        }
    })
    .addCase(userPersistence, (state, action) => {
        return {
            ...state,
            user: action.payload.user
        }
    })
)

export default userReducer;