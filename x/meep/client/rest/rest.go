package rest

import (
	"github.com/gorilla/mux"

	"github.com/cosmos/cosmos-sdk/client"
	// this line is used by starport scaffolding # 1
)

const (
	MethodGet = "GET"
)

// RegisterRoutes registers meep-related REST handlers to a router
func RegisterRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 2
	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

}

func registerQueryRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 3
	r.HandleFunc("/meep/threads/{id}", getThreadHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/meep/threads", listThreadHandler(clientCtx)).Methods("GET")

	r.HandleFunc("/meep/posts/{id}", getPostHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/meep/posts", listPostHandler(clientCtx)).Methods("GET")

}

func registerTxHandlers(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 4
	r.HandleFunc("/meep/threads", createThreadHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/meep/threads/{id}", updateThreadHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/meep/threads/{id}", deleteThreadHandler(clientCtx)).Methods("POST")

	r.HandleFunc("/meep/posts", createPostHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/meep/posts/{id}", updatePostHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/meep/posts/{id}", deletePostHandler(clientCtx)).Methods("POST")

}