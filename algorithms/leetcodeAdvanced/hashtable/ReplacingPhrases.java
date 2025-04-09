package hashtable;

import java.util.HashMap;
import java.util.Map;

public class ReplacingPhrases {
  public static boolean isIsomorphic(String s, String t) {
    Map<Character, Character> mapping = new HashMap<>();
    for (int i = 0; i < s.length(); i++) {
      if (mapping.get(s.charAt(i)) == null) {
        if (mapping.containsValue(t.charAt(i))) {
          return false;
        }
        mapping.put(s.charAt(i), t.charAt(i));
      } else if (t.charAt(i) != mapping.get(s.charAt(i))) {
        return false;
      }
    }
    return true;
  }

  public static void main(String[] args) {
    String str1 = "badc";
    String str2 = "baba";
    System.out.println(isIsomorphic(str1, str2));

  }
}
