package string;

import java.util.*;

public class FindDifferences {
  public static char findTheDifference(String s, String t) {
    // Option 1
    // HashMap<Character, Integer> compared = new HashMap<>();
    // for (int i = 0; i < s.length(); i++) {
    // if (compared.get(s.charAt(i)) == null) {
    // compared.put(s.charAt(i), 1);
    // } else {
    // compared.put(s.charAt(i), compared.get(s.charAt(i)) + 1);
    // }
    // }
    // int i = 0;
    // while ((i < s.length() && compared.get(t.charAt(i)) != null &&
    // compared.get(t.charAt(i)) != 0)) {
    // compared.put(t.charAt(i), compared.get(t.charAt(i)) - 1);
    // i++;
    // }
    // return t.charAt(i);

    // Option 2
    // int[] charCount = new int[23];
    // for (int i = 0; i < s.length(); i++) {
    //   charCount[(int) s.charAt(i) - 97]++;
    // }

    // int i = 0;
    // while ((i < s.length()) && charCount[(int) t.charAt(i) - 97] > 0) {
    //   i++;
    // }
    // return t.charAt(i);

    // Option 3: Bitwise
    char result = t.charAt(t.length() - 1);
    for (int i = 0; i < s.length(); i++) {
      result ^= s.charAt(i) ^ t.charAt(i);
    }
    return result;
  }

  public static void main(String[] args) {
    String s = "abde", t = "abcde";
    System.out.println(findTheDifference(s, t));
  }
}
