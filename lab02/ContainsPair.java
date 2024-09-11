import java.util.List;

public class ContainsPair {

    public static boolean containsPair(List<Integer> l) {
        for (int x = 0; x < l.size(); x++) {
            for (int y = x + 1; y < l.size(); y++) {
                if (l.get(x).equals(l.get(y))) {
                    return true;
                }
            }
        }
        return false;
    }

    public static void main(String[] args) {
        // Example usage
        List<Integer> numbers = List.of(1, 2, 3, 4, 2);  // Java 9+ feature to create a list
        System.out.println(containsPair(numbers));  // This should print 'true'
    }
}
