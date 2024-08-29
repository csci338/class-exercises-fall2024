import java.util.List;  // Import the List class
import java.util.ArrayList;
class ContainsPair{


public static boolean containsPair(List<Integer> list) {
   for (int i = 0; i < (list.size() - 1); i++) {
       for (int j = i + 1; j < list.size(); j++) {
           if (list.get(i).equals(list.get(j))) {
               return true;
           }
       }
   }
   return false;
}

    public static void main(String[] args) {
        // Example usage (optional):
        List<Integer> numbers = new ArrayList<>();
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
        numbers.add(1);

        boolean result = containsPair(numbers);
        System.out.println("Contains pair is : " + result); 
}

}

