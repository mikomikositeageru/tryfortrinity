#!/usr/bin/python
#!/usr/bin/env python
#-*- coding: utf-8 -*-

import pymysql

class Mysql():
	def __init__(self, hosts='127.0.0.1', ports=3306, users='miko', passwds='1q2w3e4r', dbs='miko'):
		self.con = pymysql.connect(host=hosts, port=ports, user=users, passwd=passwds, db=dbs, charset='utf8')
		self.cur = self.con.cursor()
		self.tuple = []

	def exe(self, string = ''):
		self.cur.execute(string)
		return self.cur

	def cursorClose(self):
		self.cur.close()

	def connectClose(self):
		self.con.close()

	def allClose(self):
		self.cursorClose()
		self.connectClose()

	def sqlPrint(self):
		for i in self.cur:
			self.tuple.append(i)
			print(i)

if __name__ == "__main__":
	a = Mysql('127.0.0.1', 3306, 'miko', '1q2w3e4r', 'miko')
	b = a.exe('select * from charinfo')
	a.sqlPrint()

	# import pymysql 

	# con = pymysql.connect(host='127.0.0.1', port=3306, user='miko', passwd='1q2w3e4r', db='miko')

	# cur = con.cursor()
	# cur.execute("select * from userinfo")

	# for i in cur:
	# 	b = str(i)
	# 	print(b)

	# cur.close()
	# con.close()
	pass