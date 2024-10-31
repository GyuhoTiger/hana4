package trythis;

import java.util.Scanner;

public class MyScan {
	public static void main(String[] args) {
		scanTemp();
	}

	private static void scanTemp() {
		final int currTemp = 20;
		Scanner sc = new Scanner(System.in);
		System.out.print("수심: ");
		int deep = sc.nextInt();
		double result = currTemp - Math.floor((double)deep / 10) * 0.7;
		System.out.println(result);
	}

	public static void scanUserInfo() {
		Scanner sc = new Scanner(System.in);
		System.out.println("Name: ");

		String name = sc.nextLine();
		System.out.println("Addr: ");
		String addr = sc.nextLine();

		System.out.println("Age: ");
		int age = sc.nextInt();

		System.out.println("Height: ");
		double height = sc.nextDouble();

		System.out.printf("name is %s, addr is %s, age is %d years old, height is %4.1f", name, addr, age, height);
	}
}
