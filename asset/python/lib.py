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

	def Trans(self, string = ""):
		return string.replace("'","\"")

	def saveFile(self, path="", name="", string=""):
		self.saveFile = codecs.open(path+name, 'w', 'utf-8')
		self.saveFile.write(self.Trans(string))

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
		# 왕국이름
		self.tmpDict['charname'] = self.baseList[0]
		# 종족
		self.tmpDict['race'] = self.baseList[1]
		# 성향
		self.tmpDict['values'] = self.baseList[2]
		# 음식성향
		self.tmpDict['like'] = self.baseList[3]
		# 여왕피
		self.tmpDict['queenhp'] = self.baseList[4]
		# 여왕 기력
		self.tmpDict['queensp'] = self.baseList[5]
		# 인구수
		self.tmpDict['cntrace'] = self.baseList[6]
		# 음식1
		self.tmpDict['food1'] = self.baseList[7]
		# 음식2 (과즙)
		self.tmpDict['food2'] = self.baseList[8]
		# 총 시체
		self.tmpDict['dead'] = self.baseList[9]
		# 정찰횟수
		self.tmpDict['cntpetr'] = self.baseList[10]
		# 사냥횟수
		self.tmpDict['cnthunt'] = self.baseList[11]
		# 과즙채취회수
		self.tmpDict['cntfd2'] = self.baseList[12]
		# 전쟁횟수
		self.tmpDict['cntwar'] = self.baseList[13]
		# 재난횟수
		self.tmpDict['cntgod'] = self.baseList[14]
		# 총체력
		self.tmpDict['sumhp'] = self.baseList[15]
		# 총 공격
		self.tmpDict['sumatk'] = self.baseList[16]
		# 대외관계
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
	b.stdIO.saveFile(b._path,"",str(b.jsonData))


# ('miko', '불개미', '약탈','곤충', 8500, 100, 1, 0, 0, 0, 0, 0, 0, 0, 0, 8500, 0, '')
# charname 	race 	values 	like 	queenhp 	queensp 	cntrace 	food1 	food2 	dead 	cntpetr 	cnthunt 	cntfd2 	cntwar 	cntgod 	sumhp 	sumatk 	others 
		
		