package hashtable;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class GroupAnagrams {

  public static long hash(String s, Map<Character, Integer> hashKeyMap) {
    long key = 1;
    s = s.toLowerCase();
    for (char c : s.toCharArray()) {
      key *= hashKeyMap.get(c);
    }
    return key;
  }

  public List<List<String>> groupAnagrams(String[] strs) {
    // Hash key table initialization
    Map<Character, Integer> CHAR_TO_PRIME_NUMBERS = new HashMap<>();
    int[] primes = { 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
        101 };

    for (int i = 0; i < 26; i++) {
      char letter = (char) ('a' + i);
      CHAR_TO_PRIME_NUMBERS.put(letter, primes[i]);
    }

    Map<Long, List<String>> map = new HashMap<>();
    ArrayList<Long> sortedKeys = new ArrayList<Long>();

    for (String str : strs) {
      Long key = hash(str, CHAR_TO_PRIME_NUMBERS);
      if (!map.containsKey(key)) {
        sortedKeys.add(key);
        map.put(key, new ArrayList<>());
      }
      map.get(key).add(str);
    }
    List<List<String>> output = new ArrayList<>();

    for (long key : sortedKeys) {
      output.add(map.get(key));
    }
    return output;
  }

}
