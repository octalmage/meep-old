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

	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

}

// TODO: Finish HTML handler to serve frontend.
// func serveHandler(clientCtx client.Context) http.HandlerFunc {
// 	return func(w http.ResponseWriter, r *http.Request) {
// 		fmt.Println("butts")
// 		// p := "." + r.URL.Path
// 		// if p == "./" {
// 		// 	p = "./static/index.html"
// 		// }
// 		// http.ServeFile(w, r, p)
// 	}
// }

func registerQueryRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 3
	r.HandleFunc("/meep/tips/{id}", getTipHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/meep/tips", listTipHandler(clientCtx)).Methods("GET")

	r.HandleFunc("/meep/usernames/{id}", getUsernameHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/meep/usernames", listUsernameHandler(clientCtx)).Methods("GET")

	r.HandleFunc("/meep/threads/{id}", getThreadHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/meep/threads", listThreadHandler(clientCtx)).Methods("GET")

	r.HandleFunc("/meep/posts/{id}", getPostHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/meep/posts", listPostHandler(clientCtx)).Methods("GET")

	// TODO: Finish HTML handler.
	// r.HandleFunc("/meep/serve", serveHandler(clientCtx)).Methods("GET")

}

func registerTxHandlers(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 4
	r.HandleFunc("/meep/tips", createTipHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/meep/tips/{id}", updateTipHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/meep/tips/{id}", deleteTipHandler(clientCtx)).Methods("POST")

	r.HandleFunc("/meep/usernames", createUsernameHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/meep/usernames/{id}", updateUsernameHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/meep/usernames/{id}", deleteUsernameHandler(clientCtx)).Methods("POST")

	r.HandleFunc("/meep/threads", createThreadHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/meep/threads/{id}", updateThreadHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/meep/threads/{id}", deleteThreadHandler(clientCtx)).Methods("POST")

	r.HandleFunc("/meep/posts", createPostHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/meep/posts/{id}", updatePostHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/meep/posts/{id}", deletePostHandler(clientCtx)).Methods("POST")

}
