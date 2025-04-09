package random;

public class Moving {
  public static boolean canMove(String s){
    for (int i = 0; i < s.length(); i++) {
      if (s.charAt(i) == '>' && i != s.length() - 1) {
        return false;
      }
    }
    return true;
  }
  public static void main(String[] args) {
    String input = "<^<>";
    System.out.println(canMove(input));
  }
}
