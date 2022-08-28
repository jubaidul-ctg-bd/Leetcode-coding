class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        r = len(matrix)
        for i in range(r):
            n = len(matrix[i])
            if(matrix[i][0]<=target and target<=matrix[i][n-1]):
                for j in range(n):
                    if(matrix[i][j]==target):
                        return 1
        return 0    
                