#include <print>
#include <cmath>

int main()
{
  const int numbers[]{0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
  int searching{8};

  int left{0};
  int right{std::ssize(numbers) - 1};

  while (left <= right)
  {
    int mid{left + static_cast<int>(std::floor((right - left) / 2))};
    std::println("Left: {}, Right: {}, Middle: {}", numbers[left], numbers[right], numbers[mid]);

    if (numbers[mid] == searching)
    {
      std::print("Found in {}", mid);
      return 0;
    }
    else if (numbers[mid] < searching)
    {
      left = mid + 1;
    }
    else
    {
      right = mid - 1;
    }
  }
  std::print("Not found");
  return 1;
}