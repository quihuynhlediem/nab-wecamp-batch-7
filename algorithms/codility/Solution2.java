package algorithms.codility;

public class Solution2 {
  public static int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j < high; j++) {
      if (arr[j] > pivot) {
        i++;
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }

    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
  }

  public static void quickSort(int[] arr, int low, int high) {
    if (low < high) {
      int pi = partition(arr, low, high);
      quickSort(arr, low, pi - 1);
      quickSort(arr, pi + 1, high);
    }
  }

  public static int solution(int[] P, int[] S) {
    if (P.length == 1) {
      return 1;
    }
    int totalPeople = 0;
    int cars = 0;
    int n = P.length;
    for (int i = 0; i < n; i++) {
      totalPeople += P[i];
    }
    quickSort(S, 0, n - 1);
    // for (int i = 0; i < n; i++) {
    //   System.out.println(S[i]);
    // }
    int i = 0;
    while (totalPeople > 0 && i < n) {
      totalPeople -= S[i];
      i++;
      cars++;
    }

    return cars;
  }

  public static void main(String[] args) {
    int[] P = {1, 2, 1};
    int[] S = {4, 4, 4};
    System.out.println(solution(P, S));
  }
}
