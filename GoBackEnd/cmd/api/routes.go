package main

import (
	"net/http"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)
//Roots are directions on which handler we execute depending on the path

//Function Routes is a method for application that returns a http handler
func (app *application) routes() http.Handler {
	//create a router mux ps mux = multiplexer
	mux := chi.NewRouter()

	// when your app panics it will re trace its steps and say there is a internal error
	mux.Use(middleware.Recoverer)
	// Middleware for allowing access for our api
	mux.Use(app.enableCORS)
	// Any time we get a get request go to this handler
	mux.Get("/", app.Home)

	mux.Post("/authenticate", app.authenticate)
	mux.Get("/refresh", app.refreshToken)

	mux.Get("/movies", app.AllMovies)







	return mux
}