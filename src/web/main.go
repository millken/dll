package main

import (
	"github.com/millken/goweb"
)

var (
	App = goweb.NewApp()
)

func main() {
	App.SetConfig("../config/config.ini")
	HttpAddr, _ := App.Config.GetString("base", "http-addr")
	HttpPort, _ := App.Config.GetInt("base", "http-port")
	App.ServeListen(HttpAddr, HttpPort)
	App.Router.AddRoute("localhost", "/:domain", &WhoisController{}, "Domain")
	App.Router.AddStaticPath("*", "/", "../public_html/")
	App.AddTemplates("../templates/default/")
	App.Run()
}
