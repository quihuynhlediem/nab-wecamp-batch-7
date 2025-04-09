package algorithms.leetcodeAdvanced.twoPointers;

public class BackspaceCompare {
    public static int backspaceCount(String s, int i) {
        int count = 0;
        while (i >= 0 && s.charAt(i) == '#') {
            count++;
            i--;
        }
        return count;
    }

    public static boolean backspaceCompare(String s, String t) {
        int i = s.length() - 1;
        int j = t.length() - 1;
        while (i >= 0 && j >= 0) {
            while (s.charAt(i) == '#') {
                i = i - (2 * backspaceCount(s, i));
                if (i < 0) {
                    break;
                }
            }
            while (t.charAt(j) == '#') {
                j = j - (2 * backspaceCount(t, j));
                if (j < 0) {
                    break;
                }
            }
            if (i < 0 && j < 0) {
                return true;
            } else if (i * j < 0) {
                return false;
            }
            if (i >= 0 && j >= 0 && s.charAt(i) != t.charAt(j)) {
                return false;
            }
            i--;
            j--;
        }
        return true;
    }

    public static void main(String[] args) {
        String s = "bxj##tw";
        String t = "bxo#j##tw";
        System.out.println(backspaceCompare(s, t));
    }
}
