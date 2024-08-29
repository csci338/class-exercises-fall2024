import java.util.HashSet;

public class ContainsPair {

    public static boolean containsPair(int[] nums) {
        HashSet<Integer> seenNumbers = new HashSet<>();
        for (int num : nums) {
            if (seenNumbers.contains(num)) {
                return true;
            }
            seenNumbers.add(num);
        }
        return false;
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 4, 2};
        System.out.println(containsPair(nums)); 
    }
}
