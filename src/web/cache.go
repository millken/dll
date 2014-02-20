package main

import (
	"github.com/millken/ssdb-go"
	"fmt"
)

func SetCache(url string, title string, extractor string) {
	addr,_ := App.Config.GetString("base", "ssdb-addr")
	port,_ := App.Config.GetInt("base", "ssdb-port")
	db, err := ssdb.Connect(addr, port)
	defer db.Close()
	if(err != nil){
		fmt.Println(err)
		return
	}
	fmt.Println(addr,port)
	if _, err := db.Set("test", "456");err != nil {
		fmt.Println(err)
	}
}
