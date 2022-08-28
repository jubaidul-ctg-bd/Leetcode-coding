class Solution:
    def matrixReshape(self, mat: List[List[int]], r: int, c: int) -> List[List[int]]:
        ans = []
        matLen = len(mat)
        x = len(mat[0])
        rr = r
        cc = c
        tmp = []
        if( (matLen*x) == (r*c) ):
            for i in range(matLen):
                for j in range(x):
                    tmp.append(mat[i][j])
                    cc-=1
                    if(cc == 0):
                        cc = c
                        ans.append(tmp)
                        tmp = []  
            return ans
        else:
            return mat