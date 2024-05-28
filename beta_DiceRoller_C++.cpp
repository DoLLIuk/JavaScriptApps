#include <iostream>
#include <vector>
#include <random>
#include <time.h>
#include <fstream>
using namespace std;
int main()
{
  int y;
  int i=0;
  vector<int>cRoll;
  vector<int>allNum;
  int x;
  srand(time(nullptr));
  cout << "any number from 1 to 6: ";
  cin>>y;
  cout << "count of numbers in a row: ";
  cin >> x;
  while (cRoll.size() < x){
  //for(int i = 0; i <= x; i++) {	
    i += 1;
    int diceRoll = rand() % 6+1;
    cRoll.push_back(diceRoll);
    allNum.push_back(diceRoll);
    if (cRoll[cRoll.size()-1] == y) {
    }
    else {
      cRoll.clear();
    }
  }
  double pers = (1.0 / i) * 100.0;
  cout << "How many rolls needed:" << i << " Results: ";

  for (int i : cRoll) {
    cout << i << ",";
  }
  string answer = " ";
  cout << " Percentage:" << pers<<"%";
  
  cout << "\n" <<"Do you want a full list of all numbers?"<<"\n";
  cin >> answer;
  if (answer=="yes"){
    ofstream outfile ("txt");
    outfile << "All numbers:" << "\n";
    outfile.close();
     //открытие файла для добавления текста append
    for (int i : allNum) {
       ofstream outfile ("txt",ios::app);
      //cout << i << ",";// вывод текста 
      //ofstream outfile ("txt"); // открытие для записи 
     // ofstream infile (""); // открытие для чтения 
      outfile<< i <<",";// вывод текста в файл 
     
    }
     outfile.close();
     cout << "Numbers in file right now";
  }else {
    cout << "no? ok";
  }

}
 