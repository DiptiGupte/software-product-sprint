// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.*;

/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/data")
public class DataServlet extends HttpServlet {
  @Override
  /**
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("text/html;");
    response.getWriter().println("Hello Dipti!");
  }**/
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    ArrayList<String> arr = new ArrayList<String>();
    arr.add("Hello");
    arr.add("Hi");
    arr.add("Hey");

    String json = convertToJson(arr);

    // Send the JSON as the response
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }
  private String convertToJson(ArrayList<String> a) {
    String json = "{";
    json += "\"greeting1\": ";
    json += "\"" + a.get(0) + "\"";
    json += ", ";
    json += "\"greeting2\": ";
    json += "\"" + a.get(1) + "\"";
    json += ", ";
    json += "\"greeting3\": ";
    json += "\"" + a.get(2) + "\"";
    json += "}";
    return json;
  }
}
