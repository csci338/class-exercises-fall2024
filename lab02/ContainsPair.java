import java.util.HashSet;
import java.util.List;
import java.util.Arrays;

public class ContainsPair {

    public static boolean containsPair(List<Integer> list) {
        HashSet<Integer> seen = new HashSet<>();
        
        for (Integer num : list) {
            if (seen.contains(num)) {
                return true;
            }
            seen.add(num);
        }
        
        return false;
    }

    public static void main(String[] args) {
        List<Integer> list1 = Arrays.asList(1, 2, 3, 4, 5);
        System.out.println("Contains pair: " + containsPair(list1)); // False
        
        List<Integer> list2 = Arrays.asList(1, 2, 3, 1, 4, 5);
        System.out.println("Contains pair: " + containsPair(list2)); // True
    }
}

