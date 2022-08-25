class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        x = 0
        ans = [[1], [1,1]]
        tmp = [1]
        for i in range(1, numRows-1):
            x+=1 
            for j in range(x):
                tmp.append(ans[i][j]+ans[i][j+1])
            tmp.append(1)
            print(tmp)
            ans.append(tmp)
            tmp = [1]
            print(ans)
        if(numRows == 1): return [[1]]
        elif(numRows == 2): return [[1], [1,1]]
        else: return ans
                
        