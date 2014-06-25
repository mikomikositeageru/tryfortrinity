#!/usr/bin/python
#-*- coding: utf-8 -*-

import pymysql 

con = pymysql.connect(host='127.0.0.1', port=3306, user='miko', passwd='1q2w3e4r', db='miko')

cur = con.cursor()
cur.execute("select * from userinfo")

for i in cur:
	b = str(i)
	print(b)

cur.close()
con.close()
