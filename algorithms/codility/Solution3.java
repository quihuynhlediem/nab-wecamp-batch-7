package algorithms.codility;

public class Solution3 {
  public long max(long a, long b) {
    if (a > b) {
      return a;
    }
    return b;
  }

  public int solution(int[] A) {
    if (A.length == 1) {
      return A[0];
    }
    long notHold = A[0];
    long hold = 0;
    long tempNotHold = 0;
    long tempHold = 0;

    for (int i = 0; i < A.length; i++) {
      tempNotHold = max(notHold, hold + A[i]);
      tempHold = max(hold, notHold - A[i]);
      notHold = tempNotHold;
      hold = tempHold;
    }
    long output = notHold % 1000000000L;
    return (int) output;
  }

  public static void main(String[] args) {
  }
}
