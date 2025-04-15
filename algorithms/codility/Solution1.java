package algorithms.codility;

public class Solution1 {
    public int solution(int[] A) {
        if (A.length == 1) {
            return 0;
        }
        int[] sum = new int[A.length];
        int count = 0;
        int iCount = 0;
        int n = A.length;
        sum[0] = A[0] + A[n - 1];
        for (int i = 1; i < n; i++) {
            sum[i] = A[i] + A[i - 1];
        }
        int i = 0;
        while (i < n) {
            while (i < n && sum[i] % 2 == 0) {
                iCount++;
                i++;
            }
            while (i < n && sum[i] % 2 != 0) {
                i++;
            }
            count += iCount % 2 == 0 ? iCount / 2 : (iCount - 1) / 2 + 1;
            iCount = 0;
        }
        return count;
    }

    public static void main(String[] args) {
    }
}
