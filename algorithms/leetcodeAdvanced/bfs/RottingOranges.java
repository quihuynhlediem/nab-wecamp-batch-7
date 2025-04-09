package bfs;

import java.util.*;

public class RottingOranges {
  public static class Node {
    int val;
    int min;
    int[] position;

    public Node(int val, int[] position) {
      this.val = val;
      this.position = position;
    }

    public Node(int val, int[] position, int min) {
      this.val = val;
      this.position = position;
      this.min = min;
    }
  }

  public static int orangesRotting(int[][] grid) {
    Queue<int[]> queue = new LinkedList<>();
    int fresh = 0;
    int min = 0;

    for (int i = 0; i < grid.length; i++) {
      for (int j = 0; j < grid[i].length; j++) {
        if (grid[i][j] == 2) {
          int[] position = { i, j };
          // Node node = new Node(2, position, 0);
          queue.add(position);
        } else if (grid[i][j] == 1) {
          fresh++;
        }
      }
    }
    int realTimeLength = queue.size();
    int[][] moves = { { 0, -1 }, { 1, 0 }, { -1, 0 }, { 0, 1 } };
    // int[] moves = { 0, -1, 0, 1, 0 };
    while (!queue.isEmpty()) {
      if (realTimeLength == 0) {
        realTimeLength = queue.size();
        min++;
      }
      int[] curr = queue.peek();
      for (int[] move : moves) {
        int x = curr[0] + move[0];
        int y = curr[1] + move[1];
        boolean isValidPosition = x >= 0 && x < grid.length && y >= 0
            && y < grid[0].length;
        if (isValidPosition) {
          if (grid[x][y] == 1) {
            grid[x][y] = 2;
            queue.add(new int[] { x, y });
            fresh--;
          }

        }
      }
      queue.remove();
      realTimeLength--;
    }
    if (fresh > 0) {
      return -1;
    }
    return min;
  }

  public static void main(String[] args) {
    int[][] grid = { { 2, 1, 1 }, { 0, 1, 1 }, { 1, 0, 1 } };
    System.out.println(orangesRotting(grid));
  }
}
