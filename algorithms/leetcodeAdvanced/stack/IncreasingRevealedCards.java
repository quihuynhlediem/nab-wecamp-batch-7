package stack;

import java.util.Arrays;

public class IncreasingRevealedCards {
  public static int[] deckRevealedIncreasing(int[] deck) {
    if (deck.length <= 1) {
      return deck;
    }
    Arrays.sort(deck);
    int len = deck.length;
    int[] result = new int[len];
    int halfLen = len / 2;
    int[] arr = new int[halfLen];
    for (int i = 0; i < halfLen; i++) {
      arr[i] = deck[len - halfLen + i];
    }

    int[] evenHalf = deckRevealedIncreasing(arr);
    if (len % 2 == 0) {
      for (int i = 0; i < len; i++) {
        if (i % 2 == 0) {
          result[i] = deck[i / 2];
        } else {
          int half = i / 2;
          result[i] = evenHalf[half];
        }
      }
    } else {
      for (int i = 0; i < len; i++) {
        if (i % 2 == 0) {
          result[i] = deck[i / 2];
        } else {
          int half = i / 2;
          if (half == 0) {
            result[i] = evenHalf[evenHalf.length - 1];
          } else {
            result[i] = evenHalf[half - 1];
          }
        }
      }
    }
    return result;
  }

  public static void main(String[] args) {
    int[] input = { 17, 13, 11, 2, 3, 5, 7 };
    System.out.println(deckRevealedIncreasing(input));
  }
}