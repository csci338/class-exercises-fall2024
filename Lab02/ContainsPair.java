import java.util.HashSet;
import java.util.List;

public class ContainsPair {
    public static boolean containsPair(List<Integer> numbers) {
        // Keeps track of seen numbers
        HashSet<Integer> seenNumbers = new HashSet<>();
        // Iterates over the list
        for (Integer number : numbers) {
            // Check current againt seen list, if true then pair is found
            if (seenNumbers.contains(number)) {
                return true;
            }
            // no pair, add number to seen list
            seenNumbers.add(number);
        }
        // No pair was found/default to false
        return false;
    }

}
