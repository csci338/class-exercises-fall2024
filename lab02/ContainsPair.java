package lab02;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

class ContainsPair {
    public static boolean containsPair(List<Integer> l) {
        Map<Integer, Integer> s = new HashMap<Integer, Integer>();
        for (int i = 0; i < l.size(); i++) {
            if (s.containsKey(l.get(i))) {
                return true;
            }
            s.put(l.get(i), 1);
        }
        return false;
    }

    public static void main(String[] args) {

    }
}