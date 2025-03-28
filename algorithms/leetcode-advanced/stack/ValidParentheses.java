package stack;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
import java.util.Stack;

public class ValidParentheses {
  static boolean isValid(String s) {
    Stack<Character> stack = new Stack<>();
    Map<Character, Character> mapping = new HashMap<>();
    mapping.put(']', '[');
    mapping.put('}', '{');
    mapping.put(')', '(');
    for (char c : s.toCharArray()) {
      if (stack.empty() || mapping.containsValue(c)) {
        stack.push(c);
        continue;
      }
      if (stack.empty() || stack.peek() != mapping.get(c)) {
        return false;
      } else {
        stack.pop();
      }
    }
    return stack.isEmpty();
  }

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String input = sc.nextLine();
    System.out.println(isValid(input));
    sc.close();
  }
}