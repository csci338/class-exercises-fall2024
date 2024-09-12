import java.util.*;

public class ContainsPair {

    public static boolean containsPair(List<Integer> l) {
        ArrayList<Integer> newbie = new ArrayList<Integer>();
        for (int x = 0; x < l.size(); x++) {
            if (newbie.contains(l.get(x))) {
                return true;
            }
            newbie.add(l.get(x));
        }
        return false;

    }

    public static void main(String[] args) {
        ArrayList<Integer> a = new ArrayList<Integer>();

        a.add(12);
        a.add(1);
        a.add(45);
        a.add(3);
        a.add(12);

        System.out.println(a.toString());

        boolean t = containsPair(a);

        System.out.println(t);

    }
}

