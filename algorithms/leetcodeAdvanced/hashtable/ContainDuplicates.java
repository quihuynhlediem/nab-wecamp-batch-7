package hashtable;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ContainDuplicates {
  public static boolean containsNearbyDuplicate(int[] nums, int k) {
    Map<Integer, ArrayList<Integer>> counting = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
      if (counting.get(nums[i]) == null) {
        ArrayList<Integer> currArray = new ArrayList<>();
        currArray.add(i);
        counting.put(nums[i], currArray);
      } else {
        ArrayList<Integer> currArray = counting.get(nums[i]);
        currArray.add(i);
        counting.put(nums[i], currArray);
      }
    }
    for (int key : counting.keySet()) {
      List<Integer> currArray = counting.get(key);
      if (currArray.size() < 2) {
        continue;
      }
      for (int i = 1; i < currArray.size(); i++) {
        if (currArray.get(i) - currArray.get(i - 1) <= k) {
          return true;
        }
      }
    }
    return false;
  }

  public static void main(String[] args) {
    int[] nums = { 1, 2, 3, 1 };
    int k = 3;
    System.out.println(containsNearbyDuplicate(nums, k));
  }
}
