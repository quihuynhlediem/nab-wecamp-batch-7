package queue;

import java.util.LinkedList;
import java.util.Queue;

public class RecentCounter {
  Queue<Integer> queue;

  public RecentCounter() {
    this.queue = new LinkedList<>();
  }

  public int ping(int t) {
    while (queue.size() != 0 && (t - this.queue.peek()) > 3000) {
      this.queue.remove();
    }
    this.queue.add(t);
    return this.queue.size();
  }

  public static void main(String[] args) {
    RecentCounter obj = new RecentCounter();
    int param_1 = obj.ping(642);
    int param_2 = obj.ping(1849);
    int param_3 = obj.ping(4921);
    int param_4 = obj.ping(5936);
    int param_5 = obj.ping(5957);
    System.out.printf("%d %d %d %d %d\n", param_1, param_2, param_3, param_4, param_5);
  }
}
