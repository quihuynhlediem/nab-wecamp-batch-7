package algorithms.codility;

public class Shifting {
  public int[] solution(int[] A, int K) {
    if (A.length == 0) {
      return A;
    }
    int n = A.length;
    int i = n < K ? (n - (K % n)) % n : n - K;
    int[] output = new int[n];
    output[0] = A[i];
    i = (i + 1) % n;
    int currId = 1;
    while (currId < n) {
      output[currId] = A[i];
      i = (i + 1) % n;
      currId++;
    }
    return output;
  }
  public static void main(String[] args) {
    int[] input = {};
    int k = 0;

  }
}
