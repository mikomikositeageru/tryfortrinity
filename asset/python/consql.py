#!/usr/bin/python
#-*- coding: utf-8 -*-

import pymysql 

class Mysql():
	def __init__(self, host='127.0.0.1', port=3306, user='miko', passwd='1q2w3e4r', db='miko'):
		self.con = pymysql.connect(host, port, user, passwd, db)
		self.cur = self.con.cursor()

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
