import hashlib

# def hash(plain):
# 	temp = hashlib.md5(plain).hexdigest()
# 	bytes = []
# 	temp = ''.join( temp.split(" "))
# 	for i in range(0, len(temp), 2):
# 		bytes.append( chr( int (temp[i:i+2], 16 ) ) )
# 	first_hash = ''.join( bytes )
# 	return hashlib.md5(first_hash).hexdigest()[:14]

def hash(plain):
	temp = hashlib.md5(plain).digest()
	return hashlib.md5(temp).digest()[:7]

# print hash("79fd67d181aab976")
# print hash("f1918392e76ee966")


# print hash("ebb4f439f4cf15")
# print hash("c0139cb4a1fc60")




print hash("ebb4f439f4cf15").encode('hex')
print hash("c0139cb4a1fc60").encode('hex')

