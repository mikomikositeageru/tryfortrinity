#!/usr/bin/python
#!/usr/bin/env python
#-*- coding: utf-8 -*-

import consql

if __name__ == "__main__":
	con = consql.Mysql()
	conrst = con.exe('select * from userinfo')
	con.sqlPrint()
