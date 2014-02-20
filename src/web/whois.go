package main

import (
	"github.com/millken/goweb"
	"github.com/millken/go-whois"
)

type WhoisController struct {
	goweb.Controller
}

func init() {
}

func (this *WhoisController) Domain() {
	domain := this.Request.URL.Query().Get("domain")
	var result = make(map[string]interface{})
	info, err := whois.Whois(domain)
	result["status"] = true
	result["data"] = info
	if err != nil {
		result["status"] = false
		result["data"] = err
	}
	this.RenderJson(result)
}