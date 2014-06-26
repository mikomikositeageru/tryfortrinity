#-*- coding: utf-8 -*-

import consql
import pdb
import codecs
import sys, json, re

def printu(text):
	sys.stdout.buffer.write((text+"\n").encode('utf-8'))

class StdIO():
	def __init__(self, path=""):
		self._path = path
		self.jsonText = ""
		self.file = codecs.open(self._path, 'r', "utf-8")

	def readFile(self):
		for lines in self.file:
			self.jsonText += lines

	def parseFile(self):
		self.readFile()
		self.jsonData = json.loads(s=self.jsonText)

	def jsonReturn(self):
		self.parseFile()
		return self.jsonData

	def saveFile(self, path="", name="", string=""):
		self.saveFile = codecs.open(path+name, 'w', 'utf-8')
		self.saveFile.write(string)

class TranslateDB():
	def __init__(self, path = ""):
		self._path = path
		self.stdIO = StdIO(self._path)
		self.stdIO.parseFile()
		self.tmpDict = {}
		self.jsonData = {}
		pass

	def transTuple(self, tp):
		self.baseList = list(tp)
		self.tmpDict['charname'] = self.baseList[0]
		self.tmpDict['race'] = self.baseList[1]
		self.tmpDict['values'] = self.baseList[2]
		self.tmpDict['like'] = self.baseList[3]
		self.tmpDict['queenhp'] = self.baseList[4]
		self.tmpDict['queensp'] = self.baseList[5]
		self.tmpDict['cntrace'] = self.baseList[6]
		self.tmpDict['food1'] = self.baseList[7]
		self.tmpDict['food2'] = self.baseList[8]
		self.tmpDict['dead'] = self.baseList[9]
		self.tmpDict['cntpetr'] = self.baseList[10]
		self.tmpDict['cnthunt'] = self.baseList[11]
		self.tmpDict['cntfd2'] = self.baseList[12]
		self.tmpDict['cntwar'] = self.baseList[13]
		self.tmpDict['cntgod'] = self.baseList[14]
		self.tmpDict['sumhp'] = self.baseList[15]
		self.tmpDict['sumatk'] = self.baseList[16]
		self.tmpDict['others'] = self.baseList[17]
		self.jsonData[self.baseList[0]] = self.tmpDict

	def dataPrint(self):
		print(self.jsonData)

if __name__ == "__main__":
	a = consql.Mysql()
	b = TranslateDB("../json/charinfo.json")
	c = a.exe('select * from charinfo')
	a.sqlPrint()
	b.transTuple(a.tuple[0])
	b.dataPrint()


# ('miko', '불개미', '약탈','곤충', 8500, 100, 1, 0, 0, 0, 0, 0, 0, 0, 0, 8500, 0, '')
# charname 	race 	values 	like 	queenhp 	queensp 	cntrace 	food1 	food2 	dead 	cntpetr 	cnthunt 	cntfd2 	cntwar 	cntgod 	sumhp 	sumatk 	others 
		
		