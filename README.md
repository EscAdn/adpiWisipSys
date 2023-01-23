# adpiWisipSys
API REST para el sisrema WispSys


{
	//Reglas de Firewall jumps 
	"frewall-mangle": {
		"menu": "/ip firewall mangle",
		"add-jump":{
			"prerouting": 
				"chain=prerouting action=jump jump-target=ws_prerouting comment=jump_ws_prerouting",
			"forward": 
				"chain=forward action=jump jump-target=ws_forward comment=jump_ws_forward",
			"input":
				"chain=input action=jump jump-target=ws_input comment=jump_ws_input",
			"output":
				"chain=output action=jump jump-target=ws_output comment=jump_ws_output",
			"postrouting":
				"chain=postrouting action=jump jump-target=ws_postrouting comment=jump_ws_postrouting"
		},
		"print": "/ip firewall mangle print"
	},
	"frewall-nat": {
		"menu": "/ip firewall nat",
		"add-jump":{
			"srcnat": 
				"chain=srcnat action=jump jump-target=ws_srcnat comment=jump_ws_srcnat",
			"dstnat": 
				"chain=dstnat action=jump jump-target=ws_dstnat comment=jump_ws_dstnat"
		},
		"print": "/ip firewall nat print"
	},
	"frewall-filter": {
		"menu": "/ip firewall filter",
		"add-jump":{
			"srcnat": 
				"chain=srcnat action=jump jump-target=ws_srcnat comment=jump_ws_srcnat",
			"dstnat": 
				"chain=dstnat action=jump jump-target=ws_dstnat comment=jump_ws_dstnat"
		},
		"filter" : {
			"acept": {},
			"drop": {},
		},
		"print": "/ip firewall filter print"
	},
	// Cliente DHCP
	"dhcp-client":{
		"menu": "/ip dhcp-client",
		"add": {
			"interface": "interface=ether1",
			"peer-dns": "use-peer-dns=yes",
			"peer-ntp": "use-peer-ntp=yes",
			"default-route": "add-default-route=yes"
		},
		"print": "/ip dhcp-client print"
	},
	//POOL de direcciones
	"pool":{
		"menu": "/ip pool", 
		"add": {
			"name":"pool1",
			"ranges":"192.168.10.2-192.168.10.254",
			"comment":"POOLWS"
		},
		"print": "/ip pool print"
	},
	//Servidor DHCP
	"dhcp-server":{		
		"menu": "/ip dhcp-server",
		"add": {
			"menu": "add",
			"options": {
				"name":"ws", 
				"interface":"bridge1",
				"relay":"192.168.10.1",
				"address-pool":"pool1",
				"disabled":"no"
			}
		},
		"print": "/ip dhcp-server print"
	},
	// Asignar IP's a interfces
	"address":{
		"menu": "/ip address",
		"add": {
			"menu": "add",
			"options": {
				"address": "192.168.10.1/24",
				"interface": "bridge1",
				"comment": "Comentario de la IP"
			}
		},
		"print": "/ip address print"
	},
	// 
}
