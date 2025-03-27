package TwoArrays;

import java.util.*;

public class TwoArrays {
  public static List<List<Integer>> findDifference(int[] nums1, int[] nums2) {
    Set<Integer> set1 = new HashSet<>();
    Set<Integer> set2 = new HashSet<>();
    List<Integer> distinctList1 = new ArrayList<>();
    List<Integer> distinctList2 = new ArrayList<>();
    for (int el : nums1) {
      set1.add(el);
    }
    for (int el : nums2) {
      set2.add(el);
    }
    for (int el : set1) {
      if (!set2.contains(el)) {
        distinctList1.add(el);
      }
    }
    for (int el : set2) {
      if (!set1.contains(el)) {
        distinctList2.add(el);
      }
    }
    List<List<Integer>> output = new ArrayList<>();
    output.add(distinctList1);
    output.add(distinctList2);
    return output;
  }

  public static void main(String[] args) {

  }
}
