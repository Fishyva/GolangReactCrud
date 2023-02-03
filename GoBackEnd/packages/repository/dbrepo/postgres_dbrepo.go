package dbrepo

import (
	"backend/packages/models"
	"context"
	"database/sql"
	"time"
)

type PostgresDBRepo struct {
	DB *sql.DB
}
const dbTimeout = time.Second * 3

func (m *PostgresDBRepo) Connection() *sql.DB {
	return m.DB
}

func (m *PostgresDBRepo) AllMovies() ([]*models.Movie, error) {
	
	ctx, cancel := context.WithTimeout(context.Background(), dbTimeout)
	// if you dont interact with the database in 3 seconds it will just stop
	defer cancel()

	// this is for quering the database
	query := `
		select
			id, title, release_date, runtime,
			mpaa_rating, description, coalesce(image, ''),
			created_at, updated_at
		from 
			movies
		order by
			title
	`
	rows, err := m.DB.QueryContext(ctx,query)
	if err != nil {
		return nil,err
	}
	// when im done with the database close this connection
	defer rows.Close()


	
	var movies []*models.Movie
	
	for rows.Next(){
		var movie models.Movie
		err := rows.Scan(
			&movie.ID,
			&movie.Title,
			&movie.ReleaseDate,
			&movie.RunTime,
			&movie.MPAARating,
			&movie.Description,
			&movie.Image,
			&movie.CreatedAt,
			&movie.UpdatedAt,
		)
		if err != nil {
			return nil,err
		}
		// adding the movie to the slice
		movies = append(movies, &movie)
	}
	
	
	return movies, nil
}
// Searching the user by email
func (m *PostgresDBRepo) GetUserByEmail(email string) (*models.User, error) {
	ctx, cancel := context.WithTimeout(context.Background(), dbTimeout)
	
	defer cancel()

	query := `select id, email, first_name, last_name, password,
				created_at, updated_at from users where email = $1`

	var user models.User
	row := m.DB.QueryRowContext(ctx, query, email)
    // once we get the user email we are returning all the info
	err := row.Scan(
		&user.ID,
		&user.Email,
		&user.FirstName,
		&user.LastName,
		&user.Password,
		&user.CreatedAt,
		&user.UpdatedAt,
	)
	if err != nil {
		return nil,err
	}
	return &user, nil 
}
// Searches postgres database through user ID
func (m *PostgresDBRepo) GetUserByID(id int) (*models.User, error) {
	ctx, cancel := context.WithTimeout(context.Background(), dbTimeout)
	
	defer cancel()

	query := `select id, email, first_name, last_name, password,
				created_at, updated_at from users where id = $1`

	var user models.User
	row := m.DB.QueryRowContext(ctx, query, id)
    // once we get the user email we are returning all the info
	err := row.Scan(
		&user.ID,
		&user.Email,
		&user.FirstName,
		&user.LastName,
		&user.Password,
		&user.CreatedAt,
		&user.UpdatedAt,
	)
	if err != nil {
		return nil,err
	}
	return &user, nil 
}